FROM maven:3.9.5-amazoncorretto-21 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:21-jdk-slim
COPY --from=build /target/portfolio-1.jar /portfolio.jar
EXPOSE 8080
ENTRYPOINT [ "java", "-jar", "portfolio.jar" ]

