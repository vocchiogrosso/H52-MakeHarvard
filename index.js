Webcam.set({
    width: 600,
    height: 300,
    dest_width: 600,
    dest_height: 300,
    image_format: 'jpeg',
    jpeg_quality: 90
});
Webcam.attach( '#my_camera' );


function take_snapshot() {
    // take snapshot and get image data
    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById('results').innerHTML = '<h2>Here is your image:</h2>' + '<img src="'+data_uri+'"/>';
    });
}
