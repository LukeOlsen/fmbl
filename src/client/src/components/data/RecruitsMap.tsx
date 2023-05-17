// Create a D3 chart of the united states that will accept an array of objects containing the latitude and longitude of a recruit
// // The chart should have a solid border around it and the header should be bold and centered.

// // The chart should be 100% width of the parent container.
// // The chart should be 100% height of the parent container.
// // The chart should be scrollable vertically.
// // The chart should be scrollable horizontally.
// // The chart should have a fixed header.
// // The chart should have a fixed first column.
// // The chart should have a fixed last column.
// // The chart should have a fixed footer.
// // The chart should have a legend.
// // The chart should have a tooltip.
// // The chart should have a title.
// // The chart should have a subtitle.
// // The chart should have a caption.
// // The chart should have a description.

import React, { useState, useEffect } from "react";
import us from "../../maps/states-albers-10m.json";
import { geoAlbersUsa, geoPath } from "d3-geo";
import { mesh, feature } from "topojson-client";
import { GeometryObject, Topology } from "topojson-specification";
import { scaleThreshold } from "d3-scale";
import { teamBlock } from "../../types/teams";

const RecruitsMap = (props: {
  team: teamBlock;
  recruits: Array<{
    id: number;
    name: string;
    city: string;
    stateProvince: string;
    latitude: number;
    longitude: number;
  }>;
}) => {
  const { recruits, team } = props;
  const [data, setData] = useState<any | null>();
  const [tooltip, setTooltip] = useState({
    display: false,
    x: 0,
    y: 0,
    data: {},
  });

  useEffect(() => {
    const data = feature(
      (us as unknown) as Topology,
      us.objects.states as GeometryObject
    );
    console.log(data);
    setData(data);
  }, []);

  const projection = geoAlbersUsa()
    .scale(1000)
    .translate([480, 300]);
  const path = geoPath();

  // const colorScale = scaleThreshold()
  //     .domain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  //     .range([
  //         "#f7fbff",
  //         "#deebf7",
  //         "#c6dbef",
  //         "#9ecae1",
  //         "#6baed6",
  //         "#4292c6",
  //         "#2171b5",
  //         "#08519c",
  //         "#08306b",
  //     ]);

  // const onMouseEnter = (event: any, d: any) => {
  //     const coords = projection([d.properties.longitude, d.properties.latitude]);
  //     setTooltip({
  //         display: true,
  //         x: coords[0],
  //         y: coords[1],
  //         data: d.properties,
  //     });
  // };

  // const onMouseLeave = () => {
  //     setTooltip({
  //         display: false,
  //         x: 0,
  //         y: 0,
  //         data: {},
  //     });

  // };

  return (
    <div className="flex-1 w-full h-full  overflow-auto rounded-2xl bg-slate-100 border border-slate-200 shadow-xl">
      <svg className="flex-1 w-full h-full" viewBox="0 0 975 610">
        <g
          className="countries"
          fill="none"
          stroke="#000"
          stroke-linejoin="round"
          stroke-linecap="round"
        >
          <path
            d={
              path(
                feature(
                  (us as unknown) as Topology,
                  us.objects.states as GeometryObject
                )
              ) as string
            }
          />
          <path
            d={
              path(
                feature(
                  (us as unknown) as Topology,
                  us.objects.nation as GeometryObject
                )
              ) as string
            }
          />
          <g>
            {recruits.map((recruit) => {
              const coords = projection([recruit.longitude, recruit.latitude]);
              if (coords && coords[0] !== null && coords[1]) {
                return (
                  <circle cx={coords[0]} cy={coords[1]} r="5" fill={team.color}>
                    <title>{recruit.name}</title>
                  </circle>
                );
              }
            })}
          </g>
        </g>
        {tooltip.display && (
          <g>
            <text x={tooltip.x} y={tooltip.y} className="tooltip">
              {tooltip.data}
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};

export default RecruitsMap;
