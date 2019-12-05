(function($){
    $.fn.extend({
        pager: function(options) {
            var defaults = {
                height: 800,
                fadeSpeed: 0,
				position: 'after',
				wrapClass: 'jPage',
				paginationClass: 'jPagination',
				// tpl: '<a href="#" id="jPrev" class="prev">&lt;&lt; </a><span id="jPages"></span><a href="#" id="jNext" class="next"> &gt;&gt;</a>'
				 tpl: '<span id="jPages"></span>'
            };
            var options = $.extend(defaults, options);

            var objContent = $(this);

            var fullPages = [];
            var subPages = [];
            var height = 0;
            var lastPage = 1;
            var paginatePages;

            init = function() {
                objContent.children().each(function(i){
                    height += this.clientHeight||this.offsetHeight;
                    if (height > options.height) {
                        fullPages.push(subPages);
                        subPages = [];
                        height = 0;
                    }
                    subPages.push(this);
                });

                if (height > 0) {
                    fullPages.push(subPages);
                }

                $(fullPages).wrap('<div class="' + options.wrapClass + '"></div>');

                objContent.children().hide();

                paginatePages = objContent.children();

				switch (options.position) {
					case 'before':
						objContent.before('<div class="' + options.paginationClass + '" />');
						break;
					case 'after':
						objContent.after('<div class="' + options.paginationClass + '" />');
						break;
				}

				$('.' + options.paginationClass).html(options.tpl);

                showPage(lastPage);
            };

            showPage = function(page) {
                i = page - 1;
                if (paginatePages[i]) {
                    $(paginatePages[lastPage]).fadeOut(options.fadeSpeed);
                    lastPage = i;
                    $(paginatePages[lastPage]).fadeIn(options.fadeSpeed);
					showPagination($(paginatePages).length, page);
                }
            };

            showPagination = function(numPages, page) {
                var pagins = '';
                if(numPages > 1) {
	                for (var i = 1; i <= numPages; i++) {
						if (page != i) {
							pagins += ' <a href="javascript:showPage(' + i + ');">' + i + '</a> ';
						} else {
							pagins += ' <strong>' + i + '</strong> ';
						}
	                }
	                $('.' + options.paginationClass + ' #jPages').html(pagins);
            	}
            };

			init();

            $('.' + options.paginationClass + ' #jPrev').click(function() {
                showPage(lastPage);
                return false;
            });

            $('.' + options.paginationClass + ' #jNext').click(function() {
                showPage(lastPage + 2);
                return false;
            });
        }
    });
})(jQuery);