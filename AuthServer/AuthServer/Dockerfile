# בסיס התמונה של .NET 8
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

# שלב הבנייה
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["AuthServer/AiBattle.API.csproj", "AuthServer/"]
RUN dotnet restore "AuthServer/AiBattle.API.csproj"
COPY . . 
WORKDIR "/src/AuthServer"
RUN dotnet build "AiBattle.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "AuthServer/AiBattle.API.csproj" -c Release -o /app/publish

# בניית האפליקציה
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "AiBattle.API.dll"]
