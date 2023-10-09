import Container from "./shared/Container";
import SectionTitle from "./shared/SectionTitle";

const photos = [
  {
    id: 135,
    image:
      "https://media.istockphoto.com/id/1279984422/photo/elementary-schoolchildren-wearing-a-protective-face-masks-in-the-classroom-education-during.jpg?b=1&s=612x612&w=0&k=20&c=BPZWpUHYX-KGGFJJ6ziwhr1zBm2-L29EP6Nw1KeQXmE=",
  },
  {
    id: 361,
    image:
      "https://media.istockphoto.com/id/1279984422/photo/elementary-schoolchildren-wearing-a-protective-face-masks-in-the-classroom-education-during.jpg?b=1&s=612x612&w=0&k=20&c=BPZWpUHYX-KGGFJJ6ziwhr1zBm2-L29EP6Nw1KeQXmE=",
  },
  {
    id: 153335,
    image:
      "https://media.istockphoto.com/id/1279984422/photo/elementary-schoolchildren-wearing-a-protective-face-masks-in-the-classroom-education-during.jpg?b=1&s=612x612&w=0&k=20&c=BPZWpUHYX-KGGFJJ6ziwhr1zBm2-L29EP6Nw1KeQXmE=",
  },
  {
    id: 1543,
    image:
      "https://media.istockphoto.com/id/1279984422/photo/elementary-schoolchildren-wearing-a-protective-face-masks-in-the-classroom-education-during.jpg?b=1&s=612x612&w=0&k=20&c=BPZWpUHYX-KGGFJJ6ziwhr1zBm2-L29EP6Nw1KeQXmE=",
  },
  {
    id: 156,
    image:
      "https://media.istockphoto.com/id/1279984422/photo/elementary-schoolchildren-wearing-a-protective-face-masks-in-the-classroom-education-during.jpg?b=1&s=612x612&w=0&k=20&c=BPZWpUHYX-KGGFJJ6ziwhr1zBm2-L29EP6Nw1KeQXmE=",
  },
  {
    id: 1334,
    image:
      "https://media.istockphoto.com/id/1279984422/photo/elementary-schoolchildren-wearing-a-protective-face-masks-in-the-classroom-education-during.jpg?b=1&s=612x612&w=0&k=20&c=BPZWpUHYX-KGGFJJ6ziwhr1zBm2-L29EP6Nw1KeQXmE=",
  },
  {
    id: 145,
    image:
      "https://media.istockphoto.com/id/1279984422/photo/elementary-schoolchildren-wearing-a-protective-face-masks-in-the-classroom-education-during.jpg?b=1&s=612x612&w=0&k=20&c=BPZWpUHYX-KGGFJJ6ziwhr1zBm2-L29EP6Nw1KeQXmE=",
  },
];
const Gallery = () => {
  return (
    <Container>
      <SectionTitle
        color={"bg-green-100 text-green-800"}
        isColor={true}
        title={"Gallery"}
      />
      <div className="grid gap-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 px-3 sm:px-0">
        {photos.map((photo) => (
          <div key={photo.id} className="rounded-md overflow-hidden">
            <img src={photo.image} alt="" className="w-full h-full" />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Gallery;
