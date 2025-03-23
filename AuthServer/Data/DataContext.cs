using Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;

namespace Data
{
    public class DataContext:DbContext
    {
        
        public DbSet<User> Users { get; set; }
        public DbSet<Challenge> Challenges { get; set; }
        public DbSet<Vote> Votes { get; set; }
        public DbSet<Winner> Winners { get; set; }
        public DbSet<Image> Images { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=(localdb)\MSSQLLocalDB;Database=Competition1");

        }
        //public DataContext(DbContextOptions<DataContext> options) : base(options)
        //{
        //}
        //optionsBuilder.UseMySql("server=localhost;database=competition;user=root;password=Rs0583237001",
        //    new MySqlServerVersion(new Version(8, 0, 21)));
        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseMySqlServer(@"Server=(localdb)\MSSQLLocalDB;Database=Library_db");
        //}
        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    base.OnModelCreating(modelBuilder);

        //    // הגדרת עמודות ייחודיות
        //    modelBuilder.Entity<User>()
        //        .HasIndex(u => u.Email)
        //        .IsUnique();
        //}
        //public DataContext(DbContextOptions<DataContext> options) : base(options)
        //{
        //}

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseSqlServer(@"Server=(localdb)\MSSQLLocalDB;Database=AI_Battle_db");
        //}

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseMySql("server=localhost;database=competition;user=root;password=1qaz2wsx!QAZ@WSX",
        //        new MySqlServerVersion(new Version(8, 0, 21)));

        //}

    }

    }

