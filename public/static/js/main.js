$(document).ready(function(){
	$(".username").click(function(){
		$(".profile-wrapper").toggle();
	})

	$(".checklist-single-wrapper").hover(function(){
		$(this).removeClass("active-checklist");
		$(this).find(".checklist-single .checklist-p, .icon-eye ").css({
			'background-color': '#1abc9c',
			'color': '#fff'
		});
		$(this).find(".user-share .list-icon , .user-download .list-icon, .user-message .list-icon").css({
			'color': '#1abc9c'
		});
	}, function(){
        $(this).find(".checklist-single .checklist-p, .icon-eye").css({
			'background-color': '#fff',
			'color': '#2c3e50'
		});
		$(this).find(".user-share .list-icon , .user-download .list-icon, .user-message .list-icon").css({
			'color': '#2c3e50'
		});
    });

    $(".user-share").hover(function(){
		$(this).css({
			'background-color': '#1abc9c',
		});
		$(this).find(".icon-share").css({
			'color':'#fff'
		})
	}, function(){
        $(this).css({
			'background-color': '#fff',
		});
		$(this).find(".icon-share").css({
			'color':'#2c3e50'
		})
    });

    $(".user-download").hover(function(){
		$(this).css({
			'background-color': '#1abc9c',
		});
		$(this).find(".icon-download").css({
			'color':'#fff'
		})
	}, function(){
        $(this).css({
			'background-color': '#fff',
		});
		$(this).find(".icon-download").css({
			'color':'#2c3e50'
		})
    });

    $(".user-message").hover(function(){
		$(this).css({
			'background-color': '#1abc9c',
		});
		$(this).find(".icon-envelope-o").css({
			'color':'#fff'
		})
	}, function(){
        $(this).css({
			'background-color': '#fff',
		});
		$(this).find(".icon-envelope-o").css({
			'color':'#2c3e50'
		})
    });
})