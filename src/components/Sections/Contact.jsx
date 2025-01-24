const Contact = () => {
  return (
    <div className="content">
      <h1 className="mb-6">Contact Me</h1>
      
      <iframe
        id="JotFormIFrame-250236141206241"
        title="Popup Contact Form"
        onLoad={() => window.parent.scrollTo(0,0)}
        allowtransparency="true"
        allow="geolocation; microphone; camera; fullscreen"
        src="https://form.jotform.com/250236141206241"
        frameBorder={0}
        style={{ minWidth: "100%", maxWidth: "100%", width: "50vw", height: "70vh", border: "none" }}
        scrolling="no"
      >
      </iframe>
      <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
      <script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-250236141206241']", "https://form.jotform.com/")</script>
    </div>
  )
}

export default Contact