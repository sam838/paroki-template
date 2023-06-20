import Vue from "vue";

Vue.filter("formatDate", function (dateStr) {
	if (dateStr) {
	  return Intl.DateTimeFormat("id-ID", {
	  	month: "long",
	  	day: "numeric",
	  	year: "numeric",
	  	hour: '2-digit',
	    minute: '2-digit'
	  }).format(new Date(dateStr));
	} else {
		// console.log(dateStr)
	}
});