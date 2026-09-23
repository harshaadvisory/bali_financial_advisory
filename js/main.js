/* ===== Edit these links in one place ===== */
var CONFIG = {
  // Replace with your Calendly link to send "Book a Call" buttons to a calendar instead of WhatsApp.
  BOOKING_URL: "",
  WHATSAPP: "6289673144112",
  EMAIL: "tanya@konsultankeuangan.id"
};
(function(){
  function wa(msg){return "https://wa.me/"+CONFIG.WHATSAPP+"?text="+encodeURIComponent(msg);}
  var book = CONFIG.BOOKING_URL || wa("Hi Harsha Advisory, I'd like to book an introductory call about my business in Bali.");
  var review = wa("Hi Harsha Advisory, I'm interested in a Business Financial Health Review. Could you share the next steps?");
  var chat = wa("Hi Harsha Advisory, I have a question about financial advisory for my business.");
  var check = "mailto:"+CONFIG.EMAIL+"?subject="+encodeURIComponent("Business Financial Health Checklist")+"&body="+encodeURIComponent("Hi Harsha Advisory,\n\nPlease send me the Business Financial Health Checklist.\n\nName:\nBusiness:\nIndustry:\n");
  function set(sel,url){document.querySelectorAll(sel).forEach(function(a){a.href=url;a.target="_blank";a.rel="noopener";});}
  set(".js-book",book); set(".js-review",review); set(".js-wa",chat); set(".js-checklist",check);
  // Conversion tracking hook: fires to GA4 (gtag), GTM (dataLayer) or Meta Pixel (fbq) if installed.
  document.addEventListener("click",function(e){
    var a=e.target.closest("[data-track]"); if(!a) return;
    var ev=a.getAttribute("data-track");
    try{ if(window.gtag) gtag("event",ev); if(window.dataLayer) dataLayer.push({event:ev}); if(window.fbq) fbq("trackCustom",ev); }catch(err){}
  });
})();
