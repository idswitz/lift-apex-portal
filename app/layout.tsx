import "./globals.css"

export const metadata = {
title:"Lift-Apex Portal",
description:"Community Good Governance",
};

export default function RootLayout({
children,
}:{
children:React.ReactNode
}){

return(
<html lang="en">
<body>

{children}

</body>
</html>
)
}
