import { Frame69, Frame71 } from '../../imports/Frame13575';
import { EditableFrame70 } from './EditableFrame70';

export function EditableFrame68() {
  return (
    <div className="bg-white mb-[-16px] relative rounded-[16px] shrink-0 w-[756px]">
      <div className="content-stretch flex flex-col isolate items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <Frame69 />
        <EditableFrame70 />
        <Frame71 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(203,194,166,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}
