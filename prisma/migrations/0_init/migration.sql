-- CreateTable
CREATE TABLE `Clases` (
    `IdClase` INTEGER NOT NULL AUTO_INCREMENT,
    `FkIdEntrenador` INTEGER NOT NULL,
    `FkIdEspacio` INTEGER NOT NULL,
    `FkIdHorario` INTEGER NOT NULL,
    `NombreC` VARCHAR(100) NOT NULL,
    `Descripcion` TEXT NULL,

    INDEX `FkIdEntrenador`(`FkIdEntrenador`),
    INDEX `FkIdEspacio`(`FkIdEspacio`),
    INDEX `FkIdHorario`(`FkIdHorario`),
    PRIMARY KEY (`IdClase`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comentarios` (
    `IdComentario` INTEGER NOT NULL AUTO_INCREMENT,
    `FkIdUsuario` INTEGER NOT NULL,
    `Comentario` TEXT NOT NULL,
    `FechaComentario` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `FkIdUsuario`(`FkIdUsuario`),
    PRIMARY KEY (`IdComentario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Entrenadores` (
    `IdEntrenador` INTEGER NOT NULL AUTO_INCREMENT,
    `FkIdUsuario` INTEGER NULL,
    `Especialidad` VARCHAR(100) NOT NULL,
    `Experiencia` TEXT NULL,
    `Telefono` VARCHAR(15) NULL,

    INDEX `FkIdUsuario`(`FkIdUsuario`),
    PRIMARY KEY (`IdEntrenador`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Espacios` (
    `IdEspacio` INTEGER NOT NULL AUTO_INCREMENT,
    `NombreE` VARCHAR(100) NOT NULL,
    `Tipo` ENUM('deportivo', 'recreativo') NOT NULL,
    `Capacidad` INTEGER NOT NULL,
    `Descripcion` TEXT NULL,
    `Ubicacion` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`IdEspacio`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Horarios` (
    `IdHorario` INTEGER NOT NULL AUTO_INCREMENT,
    `FkIdEspacio` INTEGER NOT NULL,
    `DiaSemana` VARCHAR(20) NOT NULL,
    `HoraInicio` TIME(0) NOT NULL,
    `HoraFin` TIME(0) NOT NULL,

    INDEX `FkIdEspacio`(`FkIdEspacio`),
    PRIMARY KEY (`IdHorario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InscripcionClases` (
    `IdInscripcionClase` INTEGER NOT NULL AUTO_INCREMENT,
    `FkIdUsuario` INTEGER NOT NULL,
    `FkIdClase` INTEGER NOT NULL,
    `FechaI` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `FkIdClase`(`FkIdClase`),
    INDEX `FkIdUsuario`(`FkIdUsuario`),
    PRIMARY KEY (`IdInscripcionClase`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InscripcionTorneos` (
    `IdInscripcionTorneo` INTEGER NOT NULL AUTO_INCREMENT,
    `FkIdUsuario` INTEGER NOT NULL,
    `FkIdTorneo` INTEGER NOT NULL,
    `FechaI` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `FkIdTorneo`(`FkIdTorneo`),
    INDEX `FkIdUsuario`(`FkIdUsuario`),
    PRIMARY KEY (`IdInscripcionTorneo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reservas` (
    `IdReserva` INTEGER NOT NULL AUTO_INCREMENT,
    `FkIdUsuario` INTEGER NOT NULL,
    `FkIdEspacio` INTEGER NOT NULL,
    `FechaReserva` DATE NOT NULL,
    `HoraInicioR` TIME(0) NOT NULL,
    `HoraFinR` TIME(0) NOT NULL,
    `Estado` ENUM('pendiente', 'confirmada', 'cancelada') NULL DEFAULT 'pendiente',

    INDEX `FkIdEspacio`(`FkIdEspacio`),
    INDEX `FkIdUsuario`(`FkIdUsuario`),
    PRIMARY KEY (`IdReserva`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Talleres` (
    `IdTaller` INTEGER NOT NULL AUTO_INCREMENT,
    `NombreTa` VARCHAR(100) NOT NULL,
    `Descripcion` TEXT NULL,
    `FkIdEntrenador` INTEGER NOT NULL,
    `FkIdHorario` INTEGER NOT NULL,

    INDEX `FkIdEntrenador`(`FkIdEntrenador`),
    INDEX `FkIdHorario`(`FkIdHorario`),
    PRIMARY KEY (`IdTaller`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Torneos` (
    `IdTorneo` INTEGER NOT NULL AUTO_INCREMENT,
    `NombreT` VARCHAR(100) NOT NULL,
    `FechaInicioT` DATETIME(0) NOT NULL,
    `FechaFinT` DATETIME(0) NOT NULL,
    `FkIdEspacio` INTEGER NULL,
    `FkIdHorario` INTEGER NULL,

    INDEX `FkIdEspacio`(`FkIdEspacio`),
    INDEX `FkIdHorario`(`FkIdHorario`),
    PRIMARY KEY (`IdTorneo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuarios` (
    `IdUsuario` INTEGER NOT NULL AUTO_INCREMENT,
    `Usuario` VARCHAR(50) NOT NULL DEFAULT '0',
    `NombreU` VARCHAR(100) NOT NULL,
    `CorreoU` VARCHAR(100) NOT NULL,
    `Contraseña` VARCHAR(255) NOT NULL,
    `Nivel` ENUM('admin', 'entrenador', 'usuario') NOT NULL,
    `FechaRegistro` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `Telefono` VARCHAR(15) NULL,

    UNIQUE INDEX `CorreoU`(`CorreoU`),
    PRIMARY KEY (`IdUsuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Clases` ADD CONSTRAINT `Clases_ibfk_1` FOREIGN KEY (`FkIdEntrenador`) REFERENCES `Entrenadores`(`IdEntrenador`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Clases` ADD CONSTRAINT `Clases_ibfk_2` FOREIGN KEY (`FkIdEspacio`) REFERENCES `Espacios`(`IdEspacio`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Clases` ADD CONSTRAINT `Clases_ibfk_3` FOREIGN KEY (`FkIdHorario`) REFERENCES `Horarios`(`IdHorario`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Comentarios` ADD CONSTRAINT `Comentarios_ibfk_1` FOREIGN KEY (`FkIdUsuario`) REFERENCES `Usuarios`(`IdUsuario`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Entrenadores` ADD CONSTRAINT `Entrenadores_ibfk_1` FOREIGN KEY (`FkIdUsuario`) REFERENCES `Usuarios`(`IdUsuario`) ON DELETE SET NULL ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Horarios` ADD CONSTRAINT `Horarios_ibfk_1` FOREIGN KEY (`FkIdEspacio`) REFERENCES `Espacios`(`IdEspacio`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `InscripcionClases` ADD CONSTRAINT `InscripcionClases_ibfk_1` FOREIGN KEY (`FkIdUsuario`) REFERENCES `Usuarios`(`IdUsuario`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `InscripcionClases` ADD CONSTRAINT `InscripcionClases_ibfk_2` FOREIGN KEY (`FkIdClase`) REFERENCES `Clases`(`IdClase`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `InscripcionTorneos` ADD CONSTRAINT `InscripcionTorneos_ibfk_1` FOREIGN KEY (`FkIdUsuario`) REFERENCES `Usuarios`(`IdUsuario`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `InscripcionTorneos` ADD CONSTRAINT `InscripcionTorneos_ibfk_2` FOREIGN KEY (`FkIdTorneo`) REFERENCES `Torneos`(`IdTorneo`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Reservas` ADD CONSTRAINT `Reservas_ibfk_1` FOREIGN KEY (`FkIdUsuario`) REFERENCES `Usuarios`(`IdUsuario`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Reservas` ADD CONSTRAINT `Reservas_ibfk_2` FOREIGN KEY (`FkIdEspacio`) REFERENCES `Espacios`(`IdEspacio`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Talleres` ADD CONSTRAINT `Talleres_ibfk_1` FOREIGN KEY (`FkIdEntrenador`) REFERENCES `Entrenadores`(`IdEntrenador`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Talleres` ADD CONSTRAINT `Talleres_ibfk_2` FOREIGN KEY (`FkIdHorario`) REFERENCES `Horarios`(`IdHorario`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Torneos` ADD CONSTRAINT `Torneos_ibfk_1` FOREIGN KEY (`FkIdEspacio`) REFERENCES `Espacios`(`IdEspacio`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Torneos` ADD CONSTRAINT `Torneos_ibfk_2` FOREIGN KEY (`FkIdHorario`) REFERENCES `Horarios`(`IdHorario`) ON DELETE RESTRICT ON UPDATE RESTRICT;

