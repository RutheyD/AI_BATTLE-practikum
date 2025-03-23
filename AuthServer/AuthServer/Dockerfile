# בסיס התמונה של .NET 8
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

# שלב הבנייה
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# מעתיק רק את קובץ הפרויקט תחילה כדי לנצל caching
COPY ["AiBattle.API.csproj", "./"]
RUN dotnet restore "./AiBattle.API.csproj"

# מעתיקים את כל שאר קבצי הפרויקט
COPY . . 
WORKDIR "/src"
RUN dotnet build "AiBattle.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "AiBattle.API.csproj" -c Release -o /app/publish

# שלב ההרצה
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

# קביעת הפקודה להרצת השרת
ENTRYPOINT ["dotnet", "AiBattle.API.dll"]
