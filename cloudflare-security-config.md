# Cloudflare Security Configuration

## Bot Management & Firewall Rules

### 1. Bot Fight Mode
- **Location**: Cloudflare Dashboard > Security > Bots
- **Enable**: Bot Fight Mode (Free plan) or Bot Management (Pro+)
- **Action**: Challenge or Block suspicious bots

### 2. Security Level
- **Location**: Cloudflare Dashboard > Security > Settings
- **Recommended**: High or Medium
- **Effect**: Challenges visitors with bad reputation

### 3. Rate Limiting Rules
- **Location**: Cloudflare Dashboard > Security > WAF > Rate limiting rules
- **Rule 1**: Login protection
  - Path: `/login`, `/auth/*`
  - Rate: 5 requests per minute per IP
- **Rule 2**: API protection  
  - Path: `/api/*`
  - Rate: 100 requests per minute per IP
- **Rule 3**: General protection
  - All paths: 300 requests per 5 minutes per IP

### 4. WAF Custom Rules
- **Location**: Cloudflare Dashboard > Security > WAF > Custom rules
- **Rule 1**: Block known bad user agents
- **Rule 2**: Block requests from known malicious countries (if applicable)
- **Rule 3**: Challenge empty user agents

### 5. DDoS Protection
- **Location**: Cloudflare Dashboard > Security > DDoS
- **Enable**: HTTP DDoS attack protection (automatic)
- **Enable**: Network-layer DDoS attack protection (automatic)

### 6. Page Rules (Legacy)
- **Location**: Cloudflare Dashboard > Rules > Page Rules
- **Security Headers**: Add if not handled by application
  - `X-Frame-Options: DENY`
  - `X-Content-Type-Options: nosniff`

## Implementation Steps

1. **Add domain to Cloudflare**
   - Change nameservers to Cloudflare
   - Verify DNS records

2. **Enable security features**
   - Bot Fight Mode: ON
   - Security Level: High
   - Always Use HTTPS: ON

3. **Configure rate limiting**
   - Create rules for login endpoints
   - Create rules for API endpoints
   - Set appropriate thresholds

4. **Set up monitoring**
   - Enable email notifications for attacks
   - Review security events regularly

## Cost Considerations
- **Free Plan**: Bot Fight Mode, basic DDoS protection
- **Pro Plan ($20/month)**: Advanced bot management, additional rate limiting
- **Business Plan ($200/month)**: Custom WAF rules, advanced analytics

## Testing
After implementation, test with:
- curl commands to verify rate limiting
- Different user agents to verify bot detection
- Security headers checker tools