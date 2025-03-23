# בסיס התמונה של .NET 8
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

# שלב הבנייה
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# העתקת כל הקבצים של הפרויקט (ולא רק את ה-.csproj)
COPY AuthServer/AuthServer/ /src/AuthServer/AuthServer/

# שחזור התלויות של הפרויקט
WORKDIR /src/AuthServer/AuthServer
RUN dotnet restore "AiBattle.API.csproj"

# בניית הפרויקט
RUN dotnet build "AiBattle.API.csproj" -c Release -o /app/build

# שלב הפרסום
FROM build AS publish
RUN dotnet publish "AiBattle.API.csproj" -c Release -o /app/publish

# שלב ההרצה
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

# הפעלת השרת
ENTRYPOINT ["dotnet", "AiBattle.API.dll"]
