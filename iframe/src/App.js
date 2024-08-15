function App() {
  return (
    <div className='iframe-container'>
      <iframe
        title='Inspektlabs SuperApp'
        src='https://superapp.inspektlabs.com/#5704415dc040'
        className='full-iframe'
        allow='geolocation; camera; microphone; gyroscope; accelerometer; fullscreen; autoplay'
        allowFullScreen
        width='100%'
        height='100%'
      ></iframe>
    </div>
  );
}

export default App;
