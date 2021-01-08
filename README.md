# Wipesoft.xyz Web Development

This project is going to be the main part of the portfolio i'm beginning to work on.
The intent is to self host, develop and deploy a website from scratch.


Website should be accessable at www.wipesoft.xyz

NOTE: Switched ISPs and port 80/443 are blocked, website will be down for a bit

I'm working on this in my spare time, progress will likely be slow so i'll outline a plan below


## The Plan

Everything is in cronological order

### Completed

* Purchase domain
* Setup webserver using reverse proxy on my unraid server
* Setup port forwarding, firewall rules, etc
* Configure CloudFlare to prevent bad things and use their caching

### In Progress
* Develop a basic site/template using react for testing deployment

### Up Next
* Containerise the testing website for depolyment using docker
* Deoply test website docker on unraid server, configure reverse proxy
* Develop simple RESTful API using Node.js and MySQL server (API is planned to be at api.wipesoft.xyz)
* Containerise API and MySQL. Deploy using docker
* Make website, API and MySQL talk to eachother and test that deployment is possible
* Develop full website, extened API and database functionality
