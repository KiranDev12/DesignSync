import { Canvas } from "./_components/canvas";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIgPage = ({ params }: BoardIdPageProps) => {
  return <Canvas boardId = {params.boardId} />;
};

export default BoardIgPage;
