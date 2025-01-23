// 1. ladda ner radio data
// 2. spara data i state
// 3. rita ut data med html kod

import { useEffect, useState } from "react";
import Channel from "@/components/Channel";

export default function Home() {
  const [channels, setChannels] = useState();

  async function getRadioChannels() {
    const respons = await fetch(
      "https://api.sr.se/api/v2/channels?format=json&size=100"
    );
    const data = await respons.json();

    setChannels(data.channels);

    console.log(data);
  }

  useEffect(() => {
    getRadioChannels();
  }, []);

  function removeChannel(id) {
    // 1. gör kopia
    // 2. ändra kopian
    // 3. uppdatera med set-function

    // Med for-loop
    // const newChannels = [...channels];
    // for(let i= 0; i < newChannels.length; i++){

    //   const channel = newChannels[i];

    //   if(channel.id == id){
    //     newChannels.splice(i, 1);
    //   }
    // }

    // Med filter
    const newChannels = channels.filter((channel) => channel.id != id);

    setChannels(newChannels);
  }

  if (channels == null) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      {channels.map((channel) => {
        return (
          <Channel
            key={channel.id}
            channel={channel}
            removeChannel={removeChannel}
          />
        );
      })}
    </div>
  );
}
