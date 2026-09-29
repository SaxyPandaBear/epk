import Image from "next/image";
import styles from "./PhotoCarousel.module.css";

export type Photo = {
  id: number;
  imageUrl: string;
  alt: string;
};

// Slow, infinitely scrolling strip of photos. The list is rendered twice and
// the track is translated by half its width, so the second copy slides into
// the first copy's place and the loop is seamless. Pure CSS, so this stays a
// server component.
export default function PhotoCarousel({ photos }: { photos: Photo[] }) {
  return (
    <div className={styles.viewport}>
      <ul className={styles.track}>
        {[false, true].flatMap((isCopy) =>
          photos.map((photo) => (
            <li
              key={`${isCopy ? "copy" : "orig"}-${photo.id}`}
              className={styles.item}
              aria-hidden={isCopy || undefined}
            >
              <Image
                src={photo.imageUrl}
                alt={isCopy ? "" : photo.alt}
                fill
                sizes="220px"
              />
            </li>
          )),
        )}
      </ul>
    </div>
  );
}
