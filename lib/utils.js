/**
 * GENERATOR UTILITIES
 **/
var _format_input = module.exports._format_input = function(input) {
  // Remove the first _ (or __)
  if (/^_/g.test(input)) {
    input = input.replace(/^_+/g, '');
  }
  // Remove the first _ (or __)
  if (/^-/g.test(input)) {
    input = input.replace(/^-+/g, '');
  }
  // Change all whitespace to -
  if (/\s/g.test(input)) {
    input = input.replace(/\s/g, '-');
  }
  // Change all remaining _ to -
  if (/_/g.test(input)) {
    input = input.replace(/_/g, '-');
  }
  // Remove any file extensions
  if (/\..+/g.test(input)) {
    input = input.replace(/\..+/g, '');
  }
  // Remove any trailing -- or __
  if (/\s+$|-+$|_+$/.test(input)) {
    input = input.replace(/\s+$|-+$|_+$/g, '');
  }

  return input;
};