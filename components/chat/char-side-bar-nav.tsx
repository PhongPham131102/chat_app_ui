import {
  Archive,
  Check,
  CircleUser,
  EllipsisVertical,
  Lock,
  Search,
  SquarePlus,
  Users,
} from "lucide-react";

const chats = [
  {
    id: 1,
    name: "+84 77 865 0995",
    message: "????sadasddfdsafđsa",
    time: "thứ sáu",
    status: "sent",
    isGroup: false,
  },
  {
    id: 2,
    name: "dfdsfdsfsdfds",
    message: "sdfasdf",
    time: "thứ sáu",
    status: "sent-by-user",
    isGroup: true,
  },
  {
    id: 3,
    name: "test",
    message: "Bạn đã tạo nhóm: test",
    time: "thứ sáu",
    isGroup: true,
    isSub: "dfdsfdsfsdfds",
  },
  {
    id: 4,
    name: "Chung",
    message: "Chào mừng đến với nhóm: Chung",
    time: "thứ sáu",
    isGroup: true,
    isSub: "dfdsfdsfsdfds",
  },
];

export default function ChatSideBarNav() {
  const filters = ["Tất cả", "Chưa đọc", "Mục Yêu thích", "Các nhóm"];

  return (
    <div className="w-full h-full flex flex-col bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-6 pb-2 shrink-0 overflow-hidden">
        <h1 className="text-xl font-bold text-whatsapp truncate min-w-0 mr-2">
          WhatsApp
        </h1>
        <div className="flex gap-4 shrink-0">
          <SquarePlus className="size-5 text-neutral-700 cursor-pointer" />
          <EllipsisVertical className="size-5 text-neutral-700 cursor-pointer" />
        </div>
      </div>

      {/* Search */}
      <div className="px-4 py-2 shrink-0">
        <div className="relative flex items-center bg-chat-layout rounded-lg px-3 py-1.5 gap-3">
          <Search className="size-4 text-neutral-500" />
          <input
            type="text"
            placeholder="Tìm kiếm hoặc bắt đầu đoạn chat mới"
            className="bg-transparent border-none outline-none text-[14px] w-full placeholder:text-neutral-500"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-10">
        {/* Archived */}
        <div className="px-4 py-3 flex items-center gap-6 cursor-pointer hover:bg-chat-layout transition-colors group border-b border-neutral-100 min-w-0">
          <Archive className="size-5 text-neutral-700 shrink-0" />
          <span className="text-[15px] text-neutral-800 flex-1 truncate whitespace-nowrap">
            Được lưu trữ
          </span>
        </div>

        {/* Chat List */}
        <div className="flex flex-col">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className="px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-chat-layout transition-colors border-b border-neutral-50/50"
            >
              {/* Avatar */}
              <div className="relative shrink-0">
                {chat.isGroup ? (
                  <div className="size-12 bg-neutral-200 rounded-full flex items-center justify-center text-neutral-500 overflow-hidden">
                    {chat.isSub ? (
                      <div className="relative size-full">
                        <Users className="size-6 absolute top-1 left-1 opacity-50" />
                        <div className="size-5 bg-neutral-300 rounded-full absolute bottom-1 right-1 border-2 border-white flex items-center justify-center">
                          <Users className="size-3 text-neutral-600" />
                        </div>
                      </div>
                    ) : (
                      <Users className="size-6" />
                    )}
                  </div>
                ) : (
                  <div className="size-12 bg-neutral-200 rounded-full flex items-center justify-center text-neutral-500">
                    <CircleUser className="size-8" />
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center gap-2">
                  <h3 className="text-[15px] font-medium text-neutral-900 truncate">
                    {chat.name}
                  </h3>
                  <span className="text-[11px] text-neutral-500 whitespace-nowrap">
                    {chat.time}
                  </span>
                </div>
                <div className="flex items-center gap-1 min-w-0">
                  {chat.status === "sent" && (
                    <Check className="size-3.5 text-neutral-400 shrink-0" />
                  )}
                  {chat.status === "sent-by-user" && (
                    <div className="flex items-center gap-1 shrink-0">
                      <span className="text-[13px] text-neutral-500 whitespace-nowrap">
                        Bạn:
                      </span>
                    </div>
                  )}
                  <p className="text-[13px] text-neutral-500 truncate flex-1 leading-tight whitespace-nowrap">
                    {chat.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="px-4 py-10 flex flex-col items-center gap-2 text-center border-t border-neutral-100 mt-5 overflow-hidden">
          <div className="flex items-center gap-1 text-[12px] text-neutral-500 w-full justify-center min-w-0">
            <Lock className="size-3 shrink-0" />
            <p className="truncate whitespace-nowrap">
              Các tin nhắn cá nhân{" "}
              <span className="text-green-600 font-medium">được mã hóa</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
