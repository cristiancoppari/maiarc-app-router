// export default function InstagramGallery({ feed }){
//   const instagram_images = feed.data
//     .filter((item: { media_type: string }) => {
//       return item.media_type === "IMAGE";
//     })
//     .slice(0, 4);

//   return (
//     <div className="flex flex-col gap-12 md:flex-row">
//       {instagram_images.map((item: { permalink: string; media_url: string }) => (
//         <a href={item.permalink} key={item.media_url} className="aspect-square w-full" target="_blank">
//           <img className="aspect-square h-full w-full object-cover" src={item.media_url} alt={"Maiarc Concierce"} />
//         </a>
//       ))}
//     </div>
//   );
// };

import Section from "@/components/section";

type InstagramGalleryProps = {
  images: string[];
};

export default function InstagramGallery({ images }: InstagramGalleryProps) {
  return (
    <div className="flex flex-col gap-12 md:flex-row">
      {images.map((image, i) => (
        <a
          href={"https://instagram.com/maiarc.conciergeagency"}
          key={i}
          className="aspect-square w-full"
          target="_blank"
        >
          <img className="aspect-square h-full w-full object-cover" src={image} alt={"Maiarc Concierce"} />
        </a>
      ))}
    </div>
  );
}
