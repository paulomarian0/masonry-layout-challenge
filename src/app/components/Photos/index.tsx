import { IPhotoResponseData } from "@/pages/api/photos";
import Image from "next/image";

const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export const Photos = async () => {
  if (!BASE_API_URL) return;

  const getPhotos = async () => {
    const response = await fetch(`${BASE_API_URL}/photos`);
    const data = await response.json();
    return data;
  };

  const { data: photosList }: IPhotoResponseData = await getPhotos();

  return (
    <div className="p-5 sm:p-8">
      <div className="columns-2 gap-5 xxs:gap-2 m-0 xs:columns-2 md:columns-3 lg:columns-4 xl:columns-5 [&>img:not(:first-child)]:m-3">
        <div>
          {photosList.map((photo) => (
            <Image
              key={photo._id}
              className="h-auto max-w-full rounded-lg my-3"
              src={photo.src}
              height={300}
              width={300}
              alt={photo.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
