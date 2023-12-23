import { Avatar } from "@mui/material";

export const teachersColumns = [
  {
    accessorKey: "img", //access nested data with dot notation
    header: "Image",
    size: 100,
    Cell: ({ cell }) => (
      <div>
        <Avatar src={cell.getValue()} sx={{ width: 30, height: 30 }} />
      </div>
    ),
  },
  {
    accessorKey: "name", //access nested data with dot notation
    header: "Teacher Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "address", //normal accessorKey
    header: "Address",
  },
  {
    accessorKey: "subject",
    header: "Subject",
  },
];

export const studentColumns = [
  {
    accessorKey: "img", //access nested data with dot notation
    header: "Image",
    size: 100,
    Cell: ({ cell }) => (
      <div>
        <Avatar src={cell.getValue()} sx={{ width: 30, height: 30 }} />
      </div>
    ),
  },
  {
    accessorKey: "name", //access nested data with dot notation
    header: "Student Name",
  },
  {
    accessorKey: "class",
    header: "Class",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "address", //normal accessorKey
    header: "Address",
  },
];


export const teachers = [
  {
    id: 1,
    name: "John Smith",
    email: "johnsmith@example.com",
    address: "123 Main Street, New York, NY 10001",
    subject: "English Language",
    img: "/images/avatars/avatar1.png",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "janedoe@example.com",
    address: "456 Park Avenue, New York, NY 10022",
    subject: "Mathematics",
    img: "/images/avatars/avatar2.png",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Broadway, New York, NY 10011",
    subject: "Geography",
    img: "/images/avatars/avatar3.png",
  },
  {
    id: 4,
    name: "Alice Williams",
    email: "alicewilliams@example.com",
    address: "321 5th Avenue, New York, NY 10016",
    subject: "Economics",
    img: "/images/avatars/avatar4.png",
  },
];

export const students = [
  {
    id: 1,
    name: "Michael Brown",
    email: "michaelbrown@example.com",
    address: "567 Oak Street, New York, NY 10005",
    class: "JSS 3",
    img: "/images/avatars/avatar5.png",
  },
  {
    id: 2,
    name: "Emily Davis",
    email: "emilydavis@example.com",
    address: "890 Elm Avenue, New York, NY 10018",
    class: "JSS 1",
    img: "/images/avatars/avatar6.png",
  },
  {
    id: 3,
    name: "Chris Miller",
    email: "chrismiller@example.com",
    address: "234 Birch Lane, New York, NY 10009",
    class: "JSS 1",
    img: "/images/avatars/avatar7.png",
  },
  {
    id: 4,
    name: "Sophia Robinson",
    email: "sophiarobinson@example.com",
    address: "876 Pine Road, New York, NY 10014",
    class: "JSS 2",
    img: "/images/avatars/avatar8.png",
  },
];


export const users = [
  {
    id: 1,
    name: "John Doe",
    profileImage: "/images/avatars/avatar1.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    profileImage: "/images/avatars/avatar2.png",
  },
  {
    id: 3,
    name: "Alice Johnson",
    profileImage: "/images/avatars/avatar3.png",
  },
  {
    id: 4,
    name: "Bob Williams",
    profileImage: "/images/avatars/avatar4.png",
  },
  {
    id: 5,
    name: "Eva Davis",
    profileImage: "/images/avatars/avatar5.png",
  },
  {
    id: 6,
    name: "Michael Brown",
    profileImage: "/images/avatars/avatar6.png",
  },
];

