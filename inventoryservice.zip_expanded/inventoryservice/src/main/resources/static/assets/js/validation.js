jQuery(document).ready(function() {
   jQuery("#forms).validate({
      rules: {
         firstname: 'required',
         lastname: 'required',
         u_email: {
            required: true,
            email: true,//add an email rule that will ensure the value entered is valid email id.
            maxlength: 255,
         },
      }
   });
});