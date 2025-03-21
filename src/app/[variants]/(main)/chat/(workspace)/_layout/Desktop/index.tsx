import { Suspense } from 'react';
import { Flexbox } from 'react-layout-kit';

import BrandTextLoading from '@/components/Loading/BrandTextLoading';

import { LayoutProps } from '../type';
import ChatHeader from './ChatHeader';
import HotKeys from './HotKeys';
import Portal from './Portal';
import TopicPanel from './TopicPanel';

const Layout = ({ children, topic, conversation, portal }: LayoutProps) => {
  return (
    <>
      <ChatHeader />
      <Flexbox
        height={'100%'}
        horizontal
        style={{ overflow: 'hidden', position: 'relative' }}
        width={'100%'}
      >
        <Flexbox
          height={'100%'}
          style={{ overflow: 'hidden', position: 'relative' }}
          width={'100%'}
        >
          conversation S:
          {conversation}
          conversation E:
        </Flexbox>
        chat children S:
        {children}
        chat children E:
        <Portal>
          <Suspense fallback={<BrandTextLoading />}>
            portal S:{portal}
            portal E:
          </Suspense>
        </Portal>
        <TopicPanel>topic S : {topic}topic E:</TopicPanel>
      </Flexbox>
      <HotKeys />
    </>
  );
};

Layout.displayName = 'DesktopConversationLayout';

export default Layout;
