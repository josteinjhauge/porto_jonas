import { projects } from '../data/projectsData';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, Paper, Stack, Typography } from '@mui/material';
import * as React from 'react';

export const Projects = () => (
    <>
        <section id='projects'>
            <div>
                <div>
                    <Typography variant='h3' align='left'>
                        Mine prosjekter
                    </Typography>
                    <Divider variant='middle'/>
                    <p>
                        Minim eu culpa esse nostrud eiusmod nostrud fugiat.
                        Esse incididunt eu quis nulla sint ut.
                        Officia sit ullamco ea cupidatat non eu nostrud eiusmod irure laborum eu.
                        Irure eu id reprehenderit cillum qui cupidatat culpa ut.
                    </p>
                </div>
                <div className='flex'>
                    <Stack direction='row' spacing={{ xs: 1, sm: 2, md: 4}}>
                        {projects.map((project) => (
                            <Paper key={project.image} variant='outlined' square={false}>
                                <Typography variant="h5" color="initial" align='left'>{project.title}</Typography>
                                <img src={project.image} alt={project.title} loading='lazy' />
                            </Paper>
                        ))}
                    </Stack>
                    
                </div>
            </div>
        </section>
    </>
);