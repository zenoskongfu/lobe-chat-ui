import { memo } from "react";
import { useTranslation } from "react-i18next";

import FullscreenLoading from "@/components/Loading/FullscreenLoading";

import { CLIENT_LOADING_STAGES } from "../stage";

interface InitProps {
	setActiveStage: (value: string) => void;
}

interface ContentProps {
	loadingStage: string;
	setActiveStage: (value: string) => void;
}

const Content = memo<ContentProps>(({ loadingStage, setActiveStage }) => {
	const { t } = useTranslation("common");

	return (
		<>
			<FullscreenLoading
				activeStage={CLIENT_LOADING_STAGES.indexOf(loadingStage)}
				contentRender={<div />}
				stages={CLIENT_LOADING_STAGES.map((key) => t(`appLoading.${key}` as any))}
			/>
		</>
	);
});

export default Content;
