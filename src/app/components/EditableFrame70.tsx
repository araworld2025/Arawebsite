import { useState } from 'react';

export function EditableFrame70() {
  const [email, setEmail] = useState('');
  
  return (
    <div className="bg-white relative shrink-0 w-full z-[2]">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[36px] py-[24px] relative w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type your email address here"
            className="font-['DM_Sans:Regular',sans-serif] font-normal leading-none opacity-40 relative shrink-0 text-[#554739] text-[18px] text-center w-full bg-transparent border-none outline-none placeholder:opacity-40 placeholder:text-[#554739] focus:opacity-100"
            style={{ fontVariationSettings: "\\'opsz\\' 14" } as React.CSSProperties}
          />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#dfdac9] border-b border-dashed border-t inset-[-1px_0] pointer-events-none" />
    </div>
  );
}
