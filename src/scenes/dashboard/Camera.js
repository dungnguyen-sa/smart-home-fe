import React from "react";


const Camera = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-lg-8  offset-lg-2">
                    <h3 class="mt-5">Live Streaming</h3>
                    <img src="http://127.0.0.1:5000/video_feed" width="50%" />
                </div>
            </div>
        </div>
    )
}

export default Camera;