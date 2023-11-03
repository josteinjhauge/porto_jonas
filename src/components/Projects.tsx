import { projects } from '../data/projectsData';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import * as React from 'react';

type ProjectsProps = {}

export const Projects = ({ }: ProjectsProps) => (
    <>
        <section id='projects'>
            <div>
                <div>
                    <h1 className='header'>
                        Mine prosjekter
                    </h1>
                    <p>
                        Minim eu culpa esse nostrud eiusmod nostrud fugiat.
                        Esse incididunt eu quis nulla sint ut.
                        Officia sit ullamco ea cupidatat non eu nostrud eiusmod irure laborum eu.
                        Irure eu id reprehenderit cillum qui cupidatat culpa ut.
                    </p>
                </div>
                <div className='flex'>
                    {projects.map((project) => (
                        <Card key={project.image}>
                            <CardActionArea>
                                <CardMedia
                                    component="image"
                                    height="140"
                                    image={project.image} />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        {project.subtitle}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {project.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Les mer
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    </>
);