const CatchAllSegments = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  if (params.slug?.length === 2) {
    return (
      <div>
        viewing docs for features {params.slug[0]} for {params.slug[1]}
      </div>
    );
  }
  if (params.slug?.length === 1) {
    return <div>viewing docs for features {params.slug[0]}</div>;
  }
  return <div>CatchAllSegments</div>;
};

export default CatchAllSegments;
