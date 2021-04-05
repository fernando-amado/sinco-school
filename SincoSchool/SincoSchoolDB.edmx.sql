
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 04/05/2021 15:19:35
-- Generated from EDMX file: C:\sourceCode\C# March 2021\SincoSchool\SincoSchoolDB.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [SincoSchoolDB];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------


-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------


-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Materias'
CREATE TABLE [dbo].[Materias] (
    [IdMateria] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Alumnoes'
CREATE TABLE [dbo].[Alumnos] (
    [IdAlumno] int IDENTITY(1,1) NOT NULL,
    [Nombre] nvarchar(max)  NOT NULL,
    [Apellido] nvarchar(max)  NOT NULL,
    [EstadoAlumno] bit  NOT NULL
);
GO

-- Creating table 'Professors'
CREATE TABLE [dbo].[Professors] (
    [IdProfesor] int IDENTITY(1,1) NOT NULL,
    [Nombre] nvarchar(max)  NOT NULL,
    [Apellido] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'MateriaProfesors'
CREATE TABLE [dbo].[MateriaProfesors] (
    [IdMaterialProfesor] int IDENTITY(1,1) NOT NULL,
    [IdMateriaFK] int  NOT NULL,
    [IdProfesorFK] int  NOT NULL,
    [Materias_IdMateria] int  NOT NULL
);
GO

-- Creating table 'MateriaAlumno'
CREATE TABLE [dbo].[MateriaAlumno] (
    [IdMateriaAlumno] int IDENTITY(1,1) NOT NULL,
    [IdMateriaFK] int  NOT NULL,
    [IdAlumnoFK] int  NOT NULL,
    [Materia_IdMateria] int  NOT NULL,
    [Alumnoes_IdAlumno] int  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [IdMateria] in table 'Materias'
ALTER TABLE [dbo].[Materias]
ADD CONSTRAINT [PK_Materias]
    PRIMARY KEY CLUSTERED ([IdMateria] ASC);
GO

-- Creating primary key on [IdAlumno] in table 'Alumnoes'
ALTER TABLE [dbo].[Alumnoes]
ADD CONSTRAINT [PK_Alumnoes]
    PRIMARY KEY CLUSTERED ([IdAlumno] ASC);
GO

-- Creating primary key on [IdProfesor] in table 'Professors'
ALTER TABLE [dbo].[Professors]
ADD CONSTRAINT [PK_Professors]
    PRIMARY KEY CLUSTERED ([IdProfesor] ASC);
GO

-- Creating primary key on [IdMaterialProfesor] in table 'MateriaProfesors'
ALTER TABLE [dbo].[MateriaProfesors]
ADD CONSTRAINT [PK_MateriaProfesors]
    PRIMARY KEY CLUSTERED ([IdMaterialProfesor] ASC);
GO

-- Creating primary key on [IdMateriaAlumno] in table 'MateriaAlumno'
ALTER TABLE [dbo].[MateriaAlumno]
ADD CONSTRAINT [PK_MateriaAlumno]
    PRIMARY KEY CLUSTERED ([IdMateriaAlumno] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [IdProfesorFK] in table 'MateriaProfesors'
ALTER TABLE [dbo].[MateriaProfesors]
ADD CONSTRAINT [FK_ProfessorMateriaProfesor]
    FOREIGN KEY ([IdProfesorFK])
    REFERENCES [dbo].[Professors]
        ([IdProfesor])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ProfessorMateriaProfesor'
CREATE INDEX [IX_FK_ProfessorMateriaProfesor]
ON [dbo].[MateriaProfesors]
    ([IdProfesorFK]);
GO

-- Creating foreign key on [Materias_IdMateria] in table 'MateriaProfesors'
ALTER TABLE [dbo].[MateriaProfesors]
ADD CONSTRAINT [FK_MateriaProfesorMateria]
    FOREIGN KEY ([Materias_IdMateria])
    REFERENCES [dbo].[Materias]
        ([IdMateria])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_MateriaProfesorMateria'
CREATE INDEX [IX_FK_MateriaProfesorMateria]
ON [dbo].[MateriaProfesors]
    ([Materias_IdMateria]);
GO

-- Creating foreign key on [Materia_IdMateria] in table 'MateriaAlumno'
ALTER TABLE [dbo].[MateriaAlumno]
ADD CONSTRAINT [FK_MateriaMateriaAlumno]
    FOREIGN KEY ([Materia_IdMateria])
    REFERENCES [dbo].[Materias]
        ([IdMateria])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_MateriaMateriaAlumno'
CREATE INDEX [IX_FK_MateriaMateriaAlumno]
ON [dbo].[MateriaAlumno]
    ([Materia_IdMateria]);
GO

-- Creating foreign key on [Alumnoes_IdAlumno] in table 'MateriaAlumno'
ALTER TABLE [dbo].[MateriaAlumno]
ADD CONSTRAINT [FK_MateriaAlumnoAlumno]
    FOREIGN KEY ([Alumnoes_IdAlumno])
    REFERENCES [dbo].[Alumnos]
        ([IdAlumno])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_MateriaAlumnoAlumno'
CREATE INDEX [IX_FK_MateriaAlumnoAlumno]
ON [dbo].[MateriaAlumno]
    ([Alumnoes_IdAlumno]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------