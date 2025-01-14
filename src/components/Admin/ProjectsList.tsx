import { useState } from 'react';
import { DragDropContext, type DropResult, Droppable } from '@hello-pangea/dnd';
import { BoxContent } from '../../styles/Containers';

import projects from '../../projects/projects';
import ButtonsActions from './ButtonActions';
import ProjectCard from './ProjectCard';
import type { projectData } from 'types/generics';

function ProjectsList() {
  const [list, setList] = useState<projectData[]>(projects);

  const reorder = (
    projects: projectData[],
    startIndex: number,
    endIndex: number,
  ) => {
    const result = Array.from(projects);

    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = reorder(list, result.source.index, result.destination.index);

    setList(items as projectData[]);
  };

  return (
    <>
      <BoxContent style={{ paddingBottom: 0 }}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="list" type="list" direction="vertical">
            {(provided) => (
              <article ref={provided.innerRef} {...provided.droppableProps}>
                {list.map((project, index) => (
                  <ProjectCard
                    project={project}
                    index={index}
                    key={project.id.toString()}
                  />
                ))}

                {provided.placeholder}
              </article>
            )}
          </Droppable>
        </DragDropContext>
      </BoxContent>
      <ButtonsActions
        isDisabled={true}
        loading={false}
        saveOnChanges={() => {
          console.log('teste');
        }}
        setPreview={() => {
          console.log('teste');
        }}
      />
    </>
  );
}

export default ProjectsList;
