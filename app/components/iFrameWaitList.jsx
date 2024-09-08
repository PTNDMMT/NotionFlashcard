const IframeComponent = () => {
    return (
      <iframe
        src="https://embeds.beehiiv.com/27bd7814-f01e-4fdf-99e7-07cae4974158?slim=true"
        data-test-id="beehiiv-embed"
        height="52"
        frameBorder="0"
        scrolling="no"
        style={{
          margin: 0,
          borderRadius: '8px',
          backgroundColor: 'transparent',
          width: '100%',
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.3)'
        }}
        title="Beehiiv Embed"
      />
    );
  };
  
  export default IframeComponent;