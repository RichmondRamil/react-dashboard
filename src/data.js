export const userColumns = [
  { field: "id", headerName: "ID", flex: 3 },
  {
    field: "user",
    headerName: "User",
    flex: 2,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "fullName", headerName: "Fullname", flex: 2 },
  {
    field: "email",
    headerName: "Email",
    flex: 3,
  },
  {
    field: "age",
    headerName: "Age",
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 2,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "Richmond",
    fullName: "Richmond Vicente Ramil",
    img: "https://demos.themeselection.com/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/3.png",
    status: "active",
    email: "Richmond@gmail.com",
    age: 22,
  },
  {
    id: 2,
    username: "Fernand",
    fullName: "Fernaan Million Galeron",
    img: "https://demos.themeselection.com/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/3.png",
    status: "passive",
    email: "Fernand@gmail.com",
    age: 23,
  },
  {
    id: 3,
    username: "Jerson",
    fullName: "Jerson Tablatin Aganon",
    img: "https://demos.themeselection.com/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/3.png",
    status: "active",
    email: "Jerson@gmail.com",
    age: 23,
  },
  {
    id: 4,
    username: "Jyvonn",
    fullName: "Jyvonn Nool Juan",
    img: "https://demos.themeselection.com/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/3.png",
    status: "active",
    email: "Jyvonn@gmail.com",
    age: 24,
  },
  {
    id: 5,
    username: "Mike",
    fullName: "Mike Tyson Kid",
    img: "https://demos.themeselection.com/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/3.png",
    status: "pending",
    email: "Mike@gmail.com",
    age: 20,
  },
  {
    id: 6,
    username: "Mark",
    fullName: "Mark Bryant Cleofas",
    img: "https://demos.themeselection.com/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/3.png",
    status: "passive",
    email: "Mark@gmail.com",
    age: 26,
  },
  {
    id: 7,
    username: "Bryan",
    fullName: "Bryan Brenna Tiofelo",
    img: "https://demos.themeselection.com/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/3.png",
    status: "active",
    email: "Bryan@gmail.com",
    age: 32,
  },
  {
    id: 8,
    username: "Jonathan",
    fullName: "Jonathan Nool Cleofas",
    img: "https://demos.themeselection.com/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/3.png",
    status: "active",
    email: "Jonathan@gmail.com",
    age: 19,
  },
  {
    id: 9,
    username: "Walter",
    fullName: "Walter Mike Mart",
    img: "https://demos.themeselection.com/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/3.png",
    status: "pending",
    email: "Walter@gmail.com",
    age: 30,
  },
  {
    id: 10,
    username: "Vincent",
    fullName: "Vincent Abdul Saudi",
    img: "https://demos.themeselection.com/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/3.png",
    status: "pending",
    email: "Vicent@gmail.com",
    age: 42,
  },
  {
    id: 11,
    username: "Galeon",
    fullName: "Galeon Mark Apollo",
    img: "https://demos.themeselection.com/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/3.png",
    status: "active",
    email: "Galeon@gmail.com",
    age: 46,
  },
  {
    id: 12,
    username: "Brandon",
    fullName: "Brandon Vicente Ramil",
    img: "https://demos.themeselection.com/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/3.png",
    status: "passive",
    email: "Brandon@gmail.com",
    age: 25,
  },
  {
    id: 13,
    username: "Kenneth",
    fullName: "Kenneth Timothy Sison",
    img: "https://demos.themeselection.com/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/3.png",
    status: "passive",
    email: "Keneth@gmail.com",
    age: 26,
  },
  {
    id: 14,
    username: "Alexis",
    fullName: "Alexis Delos Santos",
    img: "https://demos.themeselection.com/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/3.png",
    status: "active",
    email: "Alexis@gmail.com",
    age: 22,
  },
  {
    id: 15,
    username: "John",
    fullName: "John Kyle Abrera",
    img: "https://demos.themeselection.com/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/3.png",
    status: "active",
    email: "John@gmail.com",
    age: 28,
  },
  {
    id: 16,
    username: "Patrick",
    fullName: "Patrick Martin Nievera",
    img: "https://demos.themeselection.com/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/3.png",
    status: "pending",
    email: "Patrick@gmail.com",
    age: 23,
  },
  {
    id: 17,
    username: "Steve",
    fullName: "Steve Work Job",
    img: "https://demos.themeselection.com/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/3.png",
    status: "active",
    email: "Steve@gmail.com",
    age: 24,
  },
  {
    id: 18,
    username: "Ralph",
    fullName: "Ralph Dela Pena",
    img: "https://demos.themeselection.com/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/3.png",
    status: "passive",
    email: "Ralph@gmail.com",
    age: 46,
  },
  {
    id: 19,
    username: "Chandler",
    fullName: "Chandler Dark Mosquito",
    img: "https://demos.themeselection.com/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/3.png",
    status: "active",
    email: "Chandler@gmail.com",
    age: 29,
  },
  {
    id: 20,
    username: "Reyster",
    fullName: "Reyster John Car",
    img: "https://demos.themeselection.com/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/3.png",
    status: "active",
    email: "Reyster@gmail.com",
    age: 29,
  },
];
export const productColumns = [
  { field: "id", headerName: "ID", flex: 1 },
  {
    field: "product",
    headerName: "Product",
    flex: 2,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.product}
        </div>
      );
    },
  },
  {
    field: "quantity",
    headerName: "Quantity",
    flex: 2,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 2,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
export const productRows = [
  {
    id: 1,
    product: "ROG ZEPHYRUS G14 GA401",
    img: "https://dlcdnwebimgs.asus.com/gain/601388C7-6C16-4B1F-90A4-3B051E81A363/w300",
    status: "pending",
    quantity: 22,
  },
  {
    id: 2,
    product: "ROG ZEPHYRUS DUO 15 GX550",
    img: "https://dlcdnwebimgs.asus.com/gain/885747C8-A92F-4263-8C5F-E8156376FF80/w300",
    status: "shipped",
    quantity: 23,
  },
  {
    id: 3,
    product: "ROG STRIX SCAR 15 G532",
    img: "https://dlcdnwebimgs.asus.com/gain/11E3DC01-0773-493E-A8A0-9ACB0EF0D030/w300",
    status: "delivered",
    quantity: 23,
  },
  {
    id: 4,
    product: "ROG STRIX G15 G512",
    img: "https://dlcdnwebimgs.asus.com/gain/4A82A5FD-3083-4679-B9F8-C6E894D89F8D/w300",
    status: "pending",
    quantity: 24,
  },
  {
    id: 5,
    product: "Zenbook Pro",
    img: "https://www.asus.com/media/Odin/Websites/global/SubSeries/global_ZenBook-Pro_1/P_setting_xxx_0_90_end_185.png?webp",
    status: "shipped",
    quantity: 20,
  },
  {
    id: 6,
    product: "Zenbook S",
    img: "https://www.asus.com/media/Odin/Websites/global/SubSeries/global_ZenBook-S_1/P_setting_xxx_0_90_end_185.png?webp",
    status: "pending",
    quantity: 26,
  },
  {
    id: 7,
    product: "Zenbook",
    img: "https://www.asus.com/media/Odin/Websites/global/SubSeries/global_ZenBook/P_setting_xxx_0_90_end_185.png?webp",
    status: "delivered",
    quantity: 32,
  },
  {
    id: 8,
    product: "Vivobook S",
    img: "https://www.asus.com/media/Odin/Websites/global/SubSeries/global_VivoBook-S_1/P_setting_xxx_0_90_end_185.png?webp",
    status: "pending",
    quantity: 19,
  },
  {
    id: 9,
    product: "Vivobook",
    img: "https://www.asus.com/media/Odin/Websites/global/SubSeries/global_VivoBook_1/P_setting_xxx_0_90_end_185.png?webp",
    status: "pending",
    quantity: 30,
  },
  {
    id: 10,
    product: "Vivo Flip",
    img: "https://www.asus.com/media/Odin/Websites/global/SubSeries/global_VivoBook-Flip/P_setting_xxx_0_90_end_185.png?webp",
    status: "delivered",
    quantity: 42,
  },
  {
    id: 11,
    product: "Chromebook",
    img: "https://www.asus.com/media/Odin/Websites/global/SubSeries/global_Chromebook_1/P_setting_xxx_0_90_end_185.png?webp",
    status: "shipped",
    quantity: 46,
  },
  {
    id: 12,
    product: "Chromebook Flip",
    img: "https://www.asus.com/media/Odin/Websites/global/SubSeries/global_Chromebook-Flip_1/P_setting_xxx_0_90_end_185.png?webp",
    status: "delivered",
    quantity: 25,
  },
  {
    id: 13,
    product: "Acer Aspire Vero",
    img: "https://static.acer.com/up/Resource/Acer/Laptops/Aspire_Vero/Images/20220615/Aspire-Vero-AV15-51-modelpreview.png",
    status: "pending",
    quantity: 26,
  },
  {
    id: 14,
    product: "Acer Aspire Vero National Geographic",
    img: "https://static.acer.com/up/Resource/Acer/Laptops/Aspire_Vero/Images/20211223/Aspire-Vero-AV15-51R-fingerprint-modelpreview.png",
    status: "shipped",
    quantity: 22,
  },
  {
    id: 15,
    product: "Acer Aspire 5 MD",
    img: "https://static.acer.com/up/Resource/Acer/Laptops/Aspire_5/images/20220517/acer-aspire-5-a515-47-fingerprint-backlit-mint-green-modelpreview.png",
    status: "delivered",
    quantity: 28,
  },
  {
    id: 16,
    product: "Acer Aspire 7",
    img: "https://static.acer.com/up/Resource/Acer/Laptops/Aspire_5/images/20220517/acer-aspire-5-a515-47-fingerprint-backlit-mint-green-modelpreview.png",
    status: "pending",
    quantity: 23,
  },
  {
    id: 17,
    product: "Acer Nitro 7",
    img: "https://static.acer.com/up/Resource/Acer/Laptops/Nitro_7/Images/20200703/Acer-Nitro-7_AN715-52_RGB-KB_modelpreview.png",
    status: "pending",
    quantity: 24,
  },
  {
    id: 18,
    product: "Acer Nitro AMD",
    img: "https://static.acer.com/up/Resource/Acer/Laptops/Nitro_5/Image/20211227/Nitro5-AN517-42-rgbkb-Backlit-modelpreview.png",
    status: "delivered",
    quantity: 46,
  },
  {
    id: 19,
    product: "Acer Nitro 5",
    img: "https://static.acer.com/up/Resource/Acer/Laptops/Nitro_5/Image/20211227/Nitro5-an515-58-rgbkb-black-modelpreview.png",
    status: "delivered",
    quantity: 29,
  },
  {
    id: 20,
    product: "Swift 7",
    img: "https://static.acer.com/up/Resource/Acer/Laptops/Swift_7/Image/20190226/swift_7_SF714-52T-Black-Budlight_AL_preview.png",
    status: "shipped",
    quantity: 29,
  },
];
