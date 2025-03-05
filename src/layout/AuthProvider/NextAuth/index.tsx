import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";

import UserUpdater from "./UserUpdater";

const NextAuth = ({ children }: PropsWithChildren) => {
	return (
		<SessionProvider basePath={""}>
			{children}
			<UserUpdater />
		</SessionProvider>
	);
};

export default NextAuth;
