import type { Project } from "@/content/schemas";
import styles from "./projects.module.css";

export function ArchitectureDiagram({ project }: { project: Project }) {
  const { architecture } = project;
  const directed = project.category === "personal-project";
  const nodes = directed
    ? architecture.flow.map((id) =>
        architecture.nodes.find((node) => node.id === id)!,
      )
    : architecture.nodes;
  const description = directed
    ? architecture.textAlternative
    : `Components and capabilities: ${nodes.map((node) => node.label).join(", ")}.`;
  const column = 960 / nodes.length;
  return (
    <figure className={styles.diagram}>
      <svg
        viewBox="0 0 960 130"
        role="img"
        aria-labelledby={`${project.id}-diagram-title ${project.id}-diagram-description`}
      >
        <title id={`${project.id}-diagram-title`}>
          {`${project.title}: system overview`}
        </title>
        <desc id={`${project.id}-diagram-description`}>{description}</desc>
        {nodes.map((node, index) => (
          <g key={node.id}>
            {directed && index > 0 ? (
              <path
                d={`M${index * column - 12} 64h24m-5 -5l5 5 -5 5`}
                className={styles.connector}
              />
            ) : null}
            <rect
              x={index * column + 14}
              y="20"
              width={column - 28}
              height="88"
              rx="4"
            />
            {directed ? (
              <text
                x={index * column + column / 2}
                y="53"
                textAnchor="middle"
                className={styles.diagramNumber}
              >
                {String(index + 1).padStart(2, "0")}
              </text>
            ) : null}
            <text
              x={index * column + column / 2}
              y={directed ? 80 : 68}
              textAnchor="middle"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
      <figcaption>{description}</figcaption>
    </figure>
  );
}
