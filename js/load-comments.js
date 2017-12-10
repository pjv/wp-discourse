/**
 * Loads Discourse comments into the .wpdc-comments div.
 */

(function ($) {
	$( document ).ready(
		function () {
			var commentsURL  = wpdc.commentsURL,
				$commentArea = $( '#wpdc-comments' ),
				postId       = $commentArea.data( 'post-id' );

			$.ajax(
				{
					url: commentsURL + '?post_id=' + postId,
					success: function (response) {
					    $commentArea.html( response );
					}
				}
			);
		}
	)
})( jQuery );
