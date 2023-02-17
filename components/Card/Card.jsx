import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;
import Image from "next/image";

export default function MyCard({ src, title, description }) {
  return (
    <>
      <Card
        style={{
          height: "100%",
        }}
        cover={
          <Image
            alt="example"
            src={src || "https://via.placeholder.com/300x200"}
            width={300}
            height={100}
          />
        }
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={title || "TITLE"}
          description={description || "DESCRIPTION"}
        />
      </Card>
    </>
  );
}
