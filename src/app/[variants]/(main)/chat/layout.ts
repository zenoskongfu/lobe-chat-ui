import ServerLayout from "@/components/server/ServerLayout";

import Desktop from "./_layout/Desktop";
import Mobile from "./_layout/Mobile";
import { LayoutProps } from "./_layout/type";

const Layout = ServerLayout<LayoutProps>({ Desktop, Mobile });

Layout.displayName = "ChatLayout";

console.log("chat layout");

export default Layout;
