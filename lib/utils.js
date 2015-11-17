/**
 * GENERATOR UTILITIES
 **/
var _format_template_name_for = module.exports._format_template_name = function(input) {

  // Remove the first _ (or __)
  // if (/^_/g.test(input)) {
  //   input = input.replace(/^_+/g, '');
  // }

  // // Remove the first _ (or __)
  // if (/^-/g.test(input)) {
  //   input = input.replace(/^-+/g, '');
  // }

  if (/^pr/g.test(input)) {
    input = input.replace(/^pr+/g, '');
  }

  input = input.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

  // Change all whitespace to -
  // if (/\s/g.test(input)) {
  //   input = input.replace(/\s/g, '-');
  // }
  // // Change all remaining _ to -
  // if (/_/g.test(input)) {
  //   input = input.replace(/_/g, '-');
  // }

  // // Remove any file extensions
  // if (/\..+/g.test(input)) {
  //   input = input.replace(/\..+/g, '');
  // }
  // // Remove any trailing -- or __
  // if (/\s+$|-+$|_+$/.test(input)) {
  //   input = input.replace(/\s+$|-+$|_+$/g, '');
  // }

  return input;

};