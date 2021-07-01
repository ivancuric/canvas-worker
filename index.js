const worker = new Worker("./worker.js");

const video = document.getElementById("video");

video.addEventListener("loadedmetadata", () => {
  const capture = async (time, meta) => {
    // console.log(time, meta);

    const bitmap = await createImageBitmap(video);

    worker.postMessage({ bitmap }, [bitmap]);

    // const pixelData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    // console.log(performance.now() - s);

    video.requestVideoFrameCallback(capture);
  };

  video.requestVideoFrameCallback(capture);
});
