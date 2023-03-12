import { BsThreeDots } from "react-icons/bs";

interface IUserProfile {
    username: string;
    email: string;
}

const UserProfile: React.FunctionComponent<IUserProfile> = (props) => (
    <div className="w-full flex justify-between gap-3 items-start bg-white p-2 rounded-xl border-2 border-gray-200">
        <div className="flex items-center gap-2">
            <div className="h-[40px] w-[40px] rounded-full flex items-center justify-center border-2 border-gray-300 overflow-clip">
                <img
                    src="https://images.unsplash.com/photo-1630726678401-7e00d49f4255?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1604&q=80"
                    alt="profile-image"
                    className="h-[35px] w-[35px] rounded-full border-2 border-gray-200 shadow-sm"
                />
            </div>
            <div className="flex flex-col gap-0">
                <p className="text-sm font-semibold">{props.username}</p>
                <p className="text-xs text-green-600">{props.email}</p>
            </div>
        </div>
        <div className="bg-gray-100 w-[30px] rounded-lg flex items-center justify-center">
            <BsThreeDots />
        </div>
    </div>
);

export default UserProfile;
