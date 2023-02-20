import { Avatar, Card } from "antd";
const { Meta } = Card;
import Image from "next/image";

export default function MyCard({ src, title, description, avatarSrc }) {
  return (
    <>
      <Card
        style={{
          height: "100%",
          width: "100%",
        }}
        cover={
          <Image
            alt="example"
            src={src || "https://via.placeholder.com/300x200"}
            width={3000}
            height={10}
          />
        }
      >
        <Meta
          avatar={
            <Avatar src={avatarSrc || "https://joeschmoe.io/api/v1/random"} />
          }
          title={title || "TITLE"}
          description={description || "DESCRIPTION"}
        />
      </Card>
    </>
  );
}
