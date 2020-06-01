var can_play = false;

function notes_played(notes) {
	if (can_play) {
		if (notes.indexOf($("#left_decision").text()) >= 0) {
			$("#left").click();
		}
		if (notes.indexOf($("#right_decision").text()) >= 0) {
			$("#right").click();
		}
	}		
}

$(document).ready(function(){
	
	var current_step = "001";
	var myVideo = document.getElementById("video"); 
	var controls = document.getElementById("controls");
	var content = document.getElementById("content");
	var left_decision = document.getElementById("left_decision");
	var right_decision = document.getElementById("right_decision");
	var left_caption = document.getElementById("left_caption");
	var right_caption = document.getElementById("right_caption");
	var played_notes = document.getElementById("played_notes");
	var myAudio = document.getElementById("audio");
	
	var steps = {
		"001": {
			"special": ["click",],
			"src": "data/video/001.mp4",
			"steps": {
				"left": {
					"caption": "",
					"when": "always",
					"where": "01",
				},
				"right": {
					"caption": "",
					"when": "always",
					"where": "01",
				},
			},
		},
		"01": {
			"special": ["loop",],
			"src": "data/video/01.mp4",
			"steps": {
				"left": {
					"caption": "",
					"when": "click",
					"where": "1",
				},
				"right": {
					"caption": "",
					"when": "click",
					"where": "1",
				},
			},
		},
		"1": {
			"special": [],
			"src": "data/video/1.mp4",
			"steps": {
				"left": {
					"caption": "RUN AWAY",
					"when": "bgecc",
					"where": "2a",
				},
				"right": {
					"caption": "OBEY YOUR HUSBAND",
					"when": "gacce",
					"where": "2b",
				},
			},
		},
		"2b": {
			"special": [],
			"src": "data/video/2b.mp4",
			"steps": {
				"left": {
					"caption": "INVITE OVER",
					"when": "bgcce",
					"where": "3b1",
				},
				"right": {
					"caption": "GO HOME ALONE",
					"when": "ggaed",
					"where": "3b2",
				},
			}
		},
		"3b1": {
			"special": [],
			"src": "data/video/3b1.mp4",
			"steps": {
				"left": {
					"caption": "STAY ASHAMED",
					"when": "gacce",
					"where": "4b1",
				},
				"right": {
					"caption": "KILL YOUR HUSBAND",
					"when": "geccc",
					"where": "4b2",
				},
			}
		},
		"3b2": {
			"special": [],
			"src": "data/video/3b2.mp4",
			"steps": {
				"left": {
					"caption": "KILL YOUR HUSBAND",
					"when": "geccc",
					"where": "4ab",
				},
				"right": {
					"caption": "STAY ASHAMED",
					"when": "gacce",
					"where": "4b3",
				},
			}
		},
		"4b1": {
			"special": [],
			"src": "data/video/4b1.mp4",
			"steps": {
				"left": {
					"caption": "",
					"when": "always",
					"where": "end",
				},
				"right": {
					"caption": "",
					"when": "always",
					"where": "end",
				},
			}
		},
		"4b2": {
			"special": [],
			"src": "data/video/4b2.mp4",
			"steps": {
				"left": {
					"caption": "",
					"when": "always",
					"where": "end",
				},
				"right": {
					"caption": "",
					"when": "always",
					"where": "end",
				},
			}
		},
		"4b3": {
			"special": [],
			"src": "data/video/4b3.mp4",
			"steps": {
				"left": {
					"caption": "",
					"when": "always",
					"where": "end",
				},
				"right": {
					"caption": "",
					"when": "always",
					"where": "end",
				},
			}
		},
		"2a": {
			"special": [],
			"src": "data/video/2a.mp4",
			"steps": {
				"left": {
					"caption": "INVITE OVER",
					"when": "bgcce",
					"where": "3a1",
				},
				"right": {
					"caption": "GO HOME ALONE",
					"when": "ggaed",
					"where": "3a2",
				},
			}
		},
		"3a1": {
			"special": [],
			"src": "data/video/3a1.mp4",
			"steps": {
				"left": {
					"caption": "LET THEM DUEL",
					"when": "bgcce",
					"where": "4a1",
				},
				"right": {
					"caption": "STOP THEM",
					"when": "ggaed",
					"where": "4a2",
				},
			}
		},
		"4a1": {
			"special": [],
			"src": "data/video/4a1.mp4",
			"steps": {
				"left": {
					"caption": "",
					"when": "always",
					"where": "end",
				},
				"right": {
					"when": "always",
					"where": "end",
				},
			}
		},
		"4a2": {
			"special": [],
			"src": "data/video/4a2.mp4",
			"steps": {
				"left": {
					"caption": "",
					"when": "always",
					"where": "end",
				},
				"right": {
					"caption": "",
					"when": "always",
					"where": "end",
				},
			}
		},
		"3a2": {
			"special": [],
			"src": "data/video/3a2.mp4",
			"steps": {
				"left": {
					"caption": "KILL YOUR HUSBAND",
					"when": "geccc",
					"where": "4ab",
				},
				"right": {
					"caption": "OBEY YOUR HUSBAND",
					"when": "gacce",
					"where": "4a3",
				},
			}
		},
		"4a3": {
			"special": [],
			"src": "data/video/4a3.mp4",
			"steps": {
				"left": {
					"caption": "",
					"when": "always",
					"where": "end",
				},
				"right": {
					"caption": "",
					"when": "always",
					"where": "end",
				},
			}
		},
		"4ab": {
			"special": [],
			"src": "data/video/4ab.mp4",
			"steps": {
				"left": {
					"caption": "",
					"when": "always",
					"where": "end",
				},
				"right": {
					"caption": "",
					"when": "always",
					"where": "end",
				},
			}
		},
		"end": {
			"special": [],
			"src": "data/video/9.mp4",
			"steps": {
				"left": {
					"caption": "",
					"when": "always",
					"where": "01",
				},
				"right": {
					"caption": "",
					"when": "always",
					"where": "01",
				},
			}
		},
	}
	
	$("#video").click(function(){
	  if (myVideo.paused && steps[current_step]["special"].indexOf("click") >= 0) {
		myVideo.play();
		myAudio.play();
	  }
	  if (steps[current_step]["steps"]["left"]["when"] === "click" && steps[current_step]["steps"]["left"]["when"] == "click") {
		  change_step("right");
	  }
	  // else 
		// myVideo.pause(); 
	});	
	
	$("#left").click(function(){
		change_step("left");
	});
	
	$("#right").click(function(){
		change_step("right");
	});
	
	function change_step(turn) {
		current_step = steps[current_step]["steps"][turn]["where"];
		myVideo.src = steps[current_step]["src"];
		if (steps[current_step]["special"].indexOf("loop") < 0) {
			myVideo.removeAttribute("loop");
		} else {
			myVideo.setAttribute("loop", "1");
		}
		myVideo.play();
		
		$("#content").fadeOut(500);
		$("#left_caption").fadeOut(500);
		$("#left_decision").fadeOut(500, function() {
			$("#left_decision").text(steps[current_step]["steps"]["left"]["when"]);
			$("#left_caption").text(steps[current_step]["steps"]["left"]["caption"]);
		});
		$("#right_caption").fadeOut(500);
		$("#right_decision").fadeOut(500, function() {
			$("#right_decision").text(steps[current_step]["steps"]["right"]["when"]);
			$("#right_caption").text(steps[current_step]["steps"]["right"]["caption"]);
		});
		can_play = false;
	}
	
	myVideo.addEventListener('ended',myHandler,false);
    function myHandler(e) {
		can_play = true;
		$("#played_notes").val("");

		if (steps[current_step]["steps"]["right"]["when"] === "always" && steps[current_step]["steps"]["left"]["when"] === "always") {
			change_step("right");
		} else if (steps[current_step]["steps"]["right"]["when"] === "click" && steps[current_step]["steps"]["left"]["when"] === "click") {
			
		} else
		{
			$("#content").fadeIn(500);
			$("#left_decision").fadeIn(500);
			$("#left_caption").fadeIn(500);
			$("#right_decision").fadeIn(500);
			$("#right_caption").fadeIn(500);
		}
    }
	myAudio.style.top = "0px";
	
	myVideo.height=window.screen.height-10;
	controls.style.top=(window.screen.height - 40)+"px";
	controls.style.left=(10)+"px";
	content.style.top = "600px";
	content.style.left = (window.screen.width - 782)/2+"px";
	
	left_decision.style.top = "700px";
	left_decision.style.left = "200px";
	left_caption.style.top = "750px";
	left_caption.style.left = "200px";
	right_decision.style.top = "700px";
	right_decision.style.left = (window.screen.width - right_decision.offsetWidth - 225)+"px";
	right_caption.style.top = "750px";
	right_caption.style.left = (window.screen.width - right_decision.offsetWidth - 250)+"px";
	
	played_notes.style.top = "200px";
	played_notes.style.left = (window.screen.width + played_notes.offsetWidth)/2+"px";
	
	myVideo.src = steps[current_step]["src"]
	
	// $("#right_decision").text(steps[current_step]["steps"]["right"]["when"]);
	// $("#left_decision").text(steps[current_step]["steps"]["left"]["when"]);
	
	<!-- myVideo.play(); -->
	
});