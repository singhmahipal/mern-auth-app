const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

/**
 * User Schema
 * - name: User's full name
 * - email: Unique email address (used for login)
 * - password: Hashed password (auto-hashed via pre-save hook)
 * - createdAt: Account creation timestamp
 */
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: [2, "Name must be at least 2 characters"],
    maxlength: [50, "Name cannot exceed 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters"],
    select: false, // Don't include password in queries by default
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

/**
 * Pre-save middleware: Hash the password before saving to the database.
 * Only runs if the password field has been modified.
 */
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

/**
 * Instance method: Compare a candidate password with the stored hash.
 * @param {string} candidatePassword - The plain-text password to check
 * @returns {boolean} True if passwords match
 */
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
