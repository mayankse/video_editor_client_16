"use client";
import React from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import { VideoResource } from "../entity/VideoResource";
import { UploadButton } from "../shared/UploadButton";
import { useEffect } from "react";
import { blob } from "stream/consumers";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { toBlobURL } from "@ffmpeg/util";

export const VideoResourcesPanel = observer(() => {
  const store = React.useContext(StoreContext);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    //const videoexample=new MediaSource();
    //videoexample.addSourceBuffer('./moon.mp4');
    if (!file) return;
    //console.log(file);
    store.addVideoResource(URL.createObjectURL(file));
    //console.log(URL.createObjectURL(videoexample));
    //console.log(store.videos.length-1);
    //store.addVideo(store.videos.length-1);
  };

  const  handlePreFetchedTemplates=async ()=>
  {
   /* //const file=new File([],'moon.mp4',{type:'video/mp4'});
    const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.2/dist/umd"
    const ffmpeg=new FFmpeg();
    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
       wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
       // workerURL: await toBlobURL(`${baseURL}/ffmpeg-core.worker.js`, 'text/javascript'),
   });
   //console.log(coreURL);
    //const data = await ffmpeg.readFile('moon.mp4');
    //console.log(data);
    //const blob = new Blob([data], { type: "video/mp4" });
    //console.log(URL.createObjectURL(blob));*/
  }
  useEffect(()=>
  {
 //handlePreFetchedTemplates();
  },[])
  return (
    <>
      <div className="text-sm px-[16px] pt-[16px] pb-[8px] font-semibold">
        Add Video
      </div>
      {store.videos.map((video, index) => {
        console.log("Hello",index);
        return <VideoResource key={video} video={video} index={index} />;
      })}
      <UploadButton
        accept="video/mp4,video/x-m4v,video/*"
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold text-center mx-2 py-2 px-4 rounded"
        onChange={handleFileChange}/>
    </>
  );
});
