import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";

const Page = () => {
    return (
        <main className="wrapper page">
            <Header title="All videos" subHeader="Public Library" />

            <h1 className="text-2xl font-karlaclear">Welcome to SnapCast</h1>

            <VideoCard
                id="1"
                title="Snap Chat Message - 30 June 2025"
                thumbnail="/assets/samples/thumbnail (1).png"
                createdAt={new Date("2025-05-01")} // ✅ Corrected this line
                userImg="/assets/images/jason.png"
                username="jason"
                views={10}
                visibility="public"
                duration={157}
            />
        </main>
    );
};

export default Page;
