jQuery( function( $ ) {
  console.log('abc');
	$( 'input[id$="_show_delivery_time"], #woocommerce_correios_display_date' ).on( 'change', function() {
		var field = $( 'input[id$="_additional_time"]' ).closest( 'tr' );

		if ( $( this ).is( ':checked' ) ) {
			field.show();
		} else {
			field.hide();
		}
	}).change();

	$( 'select[id$="_service_type"], #woocommerce_correios_corporate_service' ).on( 'change', function() {
		var login    = $( 'input[id$="_login"]' ).closest( 'tr' ),
			password = $( 'input[id$="_password"]' ).closest( 'tr' );

		if ( 'corporate' === $( this ).val() ) {
			login.show();
			password.show();
		} else {
			login.hide();
			password.hide();
		}
	}).change();

  $('select[name$="_registry_type"]').on('change', function (e) {
    toggleOptionalService(e.target);
  });

  toggleOptionalService($('select[name$="_registry_type"]').first());

  function toggleOptionalService (select) {
    var select = $(select);
    var receiptClass = '.receipt-notice';
    var title = $('.optional-services');
    var table = $(receiptClass)
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .parent();

    table = $(table);

    var match = select.attr('id').match(/impresso/gi);
    if (match && match.length && select.val().length === 0) {
      table.hide();
      title.hide();
      title.next().hide();

      if ($(receiptClass).val() != 0) {
        $(receiptClass).click();
      }

      if ($('.own-hands').val() != 0) {
        $('.own-hands').click();
      }
    } else {
      table.show();
      title.show();
      title.next().show();
    }
  }
});
